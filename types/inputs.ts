type TForm = {
  id: string;
  name: string;
  orient?: "col" | "row";
  onUpdate?: (e: string) => void;
};

export type TInputWithLabel<T> = {
  children: string;
  placeholder: string;
  type?: "text" | "email" | "number";
  value?: T;
} & TForm;

export type TTextareaWithLabel = {
  placeholder: string;
  children: string;
} & TForm;

export type TTextEditor = {
  placeholder: string;
} & TForm;

export interface ISelectWithLabel extends TForm {
  children: string;
  placeholder: string;
  options: {
    value: string;
    label: string;
  }[];
}
