import { Button, ButtonText, useToast, Box, SelectItem } from '@gluestack-ui/themed';
import React from 'react';
import { PokemonEdit, PokemonInfos } from '~src/model/pokemon.model';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ToastWrapper from '~src/components/toast/toastWrapper.components';
import ModalWrapper from '~src/components/modal/modalWrapper.component';
import InputWrapper from '~src/components/form/inputWrapper.component';
import SelectWrapper from '~src/components/form/selectWrapper.component';
import { useAppDispatch, useAppSelector } from '~src/redux/store/store.hook';
import { showModal } from '~src/redux/slice/pokedexSlice';
import { useTranslation } from 'react-i18next';

type IPokemonModalForm = {
  pokemon?: PokemonInfos
}

const PokemonModalForm: React.FC<IPokemonModalForm> = ({ pokemon }) => {

  const dispatch = useAppDispatch();
  const { isModal } = useAppSelector((state) => state.pokedex);

  const { t } = useTranslation();

  const types: string[] = t('form:SELECT.TYPES', { returnObjects: true });

  const toast = useToast();


  const validationSchema: Yup.ObjectSchema<PokemonEdit> = Yup.object().shape({
    name: Yup.string().required(t('form:ERROR.REQUIRED')),
    hp: Yup.string().required(t('form:ERROR.REQUIRED')).max(50),
    mainType: Yup.string().required(t('form:ERROR.REQUIRED')),
  });

  const { control, handleSubmit } = useForm<PokemonEdit>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: pokemon? {name: pokemon.name, hp: pokemon.stats.hp.toString(), mainType: pokemon.types[0]} : {},
  });

  const closeModal = () => {
    dispatch(showModal(false))
  }

  const onSubmit = (values: PokemonEdit) => {
    toast.show({
      render: (id) => <ToastWrapper id={id} action='success' description={
        t('form:INPUT.NAME') + ':' + values.name + "\n"
        + t('form:INPUT.HP') + ':' + values.hp + "\n"
        + t('form:SELECT.NAME') + values.mainType + "\n"
      } />,
    });
    closeModal();
  };

  return (
    <ModalWrapper
      hasCancelButton={true}
      title={pokemon? t('form:TITLE.UPDATE') : t('form:TITLE.CREATE')}
      isOpen={isModal}
      onClose={() => closeModal()}
      mainButton={
        <Button onPress={handleSubmit(onSubmit)} action='positive'>
          <ButtonText>{pokemon? t('common:COMMON.UPDATE') : t('common:COMMON.CREATE')}</ButtonText>
        </Button>}
    >
      <Box mt="$2">
        <InputWrapper
          control={control}
          name='name'
          placeholder={t('form:INPUT.NAME')}
          helperText={t('form:HELPER.ONLY_CHARACTER')}
          formControlProps={{ isRequired: true }}
        />
      </Box>

      <Box mt="$2">
        <InputWrapper
          control={control}
          name='hp'
          placeholder={t('form:INPUT.HP')}
          helperText={t('form:HELPER.ONLY_INTEGER')}
          inputProps={{keyboardType: "numeric"}}
          formControlProps={{ isRequired: true }}
        />
      </Box>

      <Box mt="$2">
        <SelectWrapper
          control={control}
          name='mainType'
          placeholder={t('form:SELECT.NAME')}
          formControlProps={{ isRequired: true }}
        >
          {types.map((type, index) => <SelectItem label={type} value={type} key={index}/>)}
        </SelectWrapper>
      </Box>

    </ModalWrapper>
  );
}

export default PokemonModalForm;