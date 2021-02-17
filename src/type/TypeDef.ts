export type InputTextParam = {
  type: String;
  id: String;
  label: String;
  show: String;
  req: boolean;
  max: number;
  headLabel: String;
  accept: String
  funcUpdate: (val: String) => void;
  value: any;
  mininput: number;
  disable: boolean;
};

export type InputSelectParam = {
  value: String;
  funcChange: (val: String) => void;
  idSel: String;
  label: String;
  desc: any;
  disable: boolean;
};
