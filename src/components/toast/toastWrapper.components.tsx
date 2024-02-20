import { Center, Icon, Toast, ToastDescription, ToastTitle, VStack } from '@gluestack-ui/themed';
import { AlertTriangle, CheckCircle, Info, LucideIcon, Megaphone, XOctagon } from 'lucide-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

type ToastWrapperProps = {
  id: string;
  description?: string;
  action: 'error' | 'warning' | 'success' | 'info' | 'attention';
};

const ToastWrapper: React.FC<ToastWrapperProps> = ({ id, description, action }) => {
  
  const {t} = useTranslation(['common']);
  
  let icon: LucideIcon;
  let title: string;

  switch (action) {
    case 'attention': {
      icon = Megaphone;
      title = t('common:COMMON.ATTENTION');
      break;
    }
    case 'error': {
      icon = XOctagon;
      title = t('common:COMMON.ERROR');
      break;
    }
    case 'info': {
      icon = Info;
      title = t('common:COMMON.INFO');
      break;
    }
    case 'success': {
      icon = CheckCircle;
      title = t('common:COMMON.SUCESS');
      break;
    }
    case 'warning': {
      icon = AlertTriangle;
      title = t('common:COMMON.WARNING');
      break;
    }
  }

  return (
    <Toast nativeID={`toast+${id}`} action={action} variant='accent'>
      <Center>
        <Icon as={icon} size='xl'/>
      </Center>
      <VStack space='xs' ml={'$4'}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </VStack>
    </Toast>
  );
};

export default ToastWrapper;
