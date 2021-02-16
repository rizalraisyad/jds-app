export type InputTextParam = {
  type: String;
  id: String;
  label: String;
};

export type InputSelectParam = {
  value: String;
  funcChange: (val: String) => void;
  idSel: String;
  label: String;
  desc: any;
};
