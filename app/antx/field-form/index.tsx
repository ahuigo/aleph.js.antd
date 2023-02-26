import * as React from 'react';
import type { FormInstance } from './interface.tsx';
import Field from './Field.tsx';
import List from './List.tsx';
import useForm from './useForm.tsx';
import type { FormProps } from './Form.tsx';
import FieldForm from './Form.tsx';
import { FormProvider } from './FormContext.tsx';
import FieldContext from './FieldContext.tsx';
import ListContext from './ListContext.tsx';
import useWatch from './useWatch.tsx';

const InternalForm = React.forwardRef<FormInstance, FormProps>(FieldForm) as <Values = any>(
  props: FormProps<Values> & { ref?: React.Ref<FormInstance<Values>> },
) => React.ReactElement;

type InternalFormType = typeof InternalForm;
interface RefFormType extends InternalFormType {
  FormProvider: typeof FormProvider;
  Field: typeof Field;
  List: typeof List;
  useForm: typeof useForm;
  useWatch: typeof useWatch;
}

const RefForm: RefFormType = InternalForm as RefFormType;

RefForm.FormProvider = FormProvider;
RefForm.Field = Field;
RefForm.List = List;
RefForm.useForm = useForm;
RefForm.useWatch = useWatch;

export { FormInstance, Field, List, useForm, FormProvider, FieldContext, ListContext, useWatch };

export type { FormProps };

export default RefForm;
