import {
  Box,
  Button,
  ButtonText,
  SelectItem,
  useToast,
} from "@gluestack-ui/themed";
import { yupResolver } from "@hookform/resolvers/yup";
import { isNil } from "lodash";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import InputWrapper from "~src/components/form/inputWrapper.component";
import SelectWrapper from "~src/components/form/selectWrapper.component";
import ModalWrapper from "~src/components/modal/modalWrapper.component";
import ToastWrapper from "~src/components/toast/toastWrapper.components";
import { PokemonEdit } from "~src/module/pokedex/model/pokemon.model";
import { useAppDispatch, useAppSelector } from "~src/store/store.hook";
import { PokemonInfo } from "../../model/pokemonInfo.model";
import { showModal } from "../../_slices/pokedex.slice";

type IPokemonModalForm = {
  pokemon?: PokemonInfo;
};

const PokemonModalForm: React.FC<IPokemonModalForm> = ({ pokemon }) => {
  const dispatch = useAppDispatch();
  const { isModal } = useAppSelector((state) => state.pokedex);

  const { t } = useTranslation(["pokedex", "common"]);

  const isEdit = !isNil(pokemon);

  const types: string[] = t("pokedex:FORM.SELECT.TYPES", {
    returnObjects: true,
  });

  const toast = useToast();

  const validationSchema: Yup.ObjectSchema<PokemonEdit> = Yup.object().shape({
    name: Yup.string()
      .required(t("pokedex:FORM.ERROR.REQUIRED"))
      .max(50, t("pokedex:FORM.ERROR.MAX_CHARAC", { max: 50 })),
    hp: Yup.string().required(t("pokedex:FORM.ERROR.REQUIRED")),
    mainType: Yup.string().required(t("pokedex:FORM.ERROR.REQUIRED")),
  });

  const { control, handleSubmit } = useForm<PokemonEdit>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: pokemon
      ? {
          name: pokemon.name,
          hp: pokemon.stats.hp.toString(),
          mainType: pokemon.types[0],
        }
      : {},
  });

  const closeModal = () => {
    dispatch(showModal(false));
  };

  const onSubmit = (values: PokemonEdit) => {
    toast.show({
      render: (id) => (
        <ToastWrapper
          id={id}
          action="success"
          description={`${t("pokedex:FORM.INPUT.NAME")} : ${values.name} \n ${t(
            "pokedex:FORM.INPUT.HP"
          )} : ${values.hp} \n ${t("pokedex:FORM.SELECT.NAME")} : ${
            values.mainType
          }`}
        />
      ),
    });
    closeModal();
  };

  return (
    <ModalWrapper
      hasCancelButton={true}
      title={
        isEdit ? t("pokedex:FORM.TITLE.UPDATE") : t("pokedex:FORM.TITLE.CREATE")
      }
      isOpen={isModal}
      onClose={() => closeModal()}
      mainButton={
        <Button onPress={handleSubmit(onSubmit)} action="positive">
          <ButtonText>
            {isEdit ? t("common:COMMON.UPDATE") : t("common:COMMON.CREATE")}
          </ButtonText>
        </Button>
      }
    >
      <Box mt="$2">
        <InputWrapper
          control={control}
          name="name"
          placeholder={t("pokedex:FORM.INPUT.NAME")}
          helperText={t("pokedex:FORM.HELPER.ONLY_CHARACTER")}
          formControlProps={{ isRequired: true }}
        />
      </Box>

      <Box mt="$2">
        <InputWrapper
          control={control}
          name="hp"
          placeholder={t("pokedex:FORM.INPUT.HP")}
          helperText={t("pokedex:FORM.HELPER.ONLY_INTEGER")}
          inputProps={{ keyboardType: "numeric" }}
          formControlProps={{ isRequired: true }}
        />
      </Box>

      <Box mt="$2">
        <SelectWrapper
          control={control}
          name="mainType"
          placeholder={t("pokedex:FORM.SELECT.NAME")}
          formControlProps={{ isRequired: true }}
        >
          {types.map((type, index) => (
            <SelectItem label={type} value={type} key={index} />
          ))}
        </SelectWrapper>
      </Box>
    </ModalWrapper>
  );
};

export default PokemonModalForm;
