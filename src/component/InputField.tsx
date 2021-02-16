import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { InputTextParam, InputSelectParam } from "../type/TypeDef";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { relative } from "path";

export const InputField = (param: InputTextParam) => {
  return (
    <>
      <TextField
        id={String(param.id)}
        type={String(param.type)}
        label={param.label}
        variant="outlined"
      />
    </>
  );
};

export const SelectField = ({
  value,
  funcChange,
  idSel,
  label,
  desc,
}: InputSelectParam) => {
  return (
    <>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId={String(label)}
        id={String(idSel)}
        value={value}
        onChange={(e) => {
          funcChange(String(e.target.value));
        }}
      >
        {desc &&
          desc.map((item: any) => {
            return <MenuItem value={item.desc}>{item.desc}</MenuItem>;
          })}
      </Select>
    </>
  );
};

export const SelectFieldWDesc = ({
  value,
  funcChange,
  idSel,
  label,
  desc,
}: InputSelectParam) => {
  const [hide, sethide] = useState("none");
  const validate = (e: Number) => {
    console.log(e);
    if (e == 0) {
      // return (
      //   <TextField
      //     id={String(idSel)}
      //     type="text"
      //     label={label}
      //     variant="outlined"
      //     onChange={(e) => {
      //       funcChange(String(e.target.value));
      //     }}
      //   />
      // );
      sethide("block");
    } else {
      // eslint-disable-next-line array-callback-return
      sethide("none");
      desc.map((item: any) => {
        if (e === item.value) {
          console.log(item.desc);
          funcChange(String(item.desc));
        }
      });
    }
  };
  return (
    <>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId={String(label)}
        id={String(idSel)}
        value={value}
        onChange={(e) => {
          // console.log(e.target.value);
          validate(Number(e.target.value));
        }}
      >
        {desc &&
          desc.map((item: any) => {
            return <MenuItem value={item.value}>{item.desc}</MenuItem>;
          })}
      </Select>
      <TextField
        style={{ display: hide, position: "relative", width: "100%" }}
        id={String(idSel)}
        type="text"
        label={label}
        variant="outlined"
        value={value}
        onChange={(e) => {
          funcChange(String(e.target.value));
        }}
      />
    </>
  );
};
