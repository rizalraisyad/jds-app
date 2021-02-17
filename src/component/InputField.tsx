import React from "react";
import TextField from "@material-ui/core/TextField";
import { InputTextParam, InputSelectParam } from "../type/TypeDef";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export const InputField = (param: InputTextParam) => {
  if(param.type!=="file"){
    if(param.max>0 || param.mininput!==0){
      return (
        <>
        <InputLabel id="demo-simple-select-label" style={{display:String(param.show)}}>{param.headLabel}</InputLabel>
          <TextField 
            value={param.value}
            required={param.req}
            style={{display:String(param.show)}}
            id={String(param.id)}
            type={String(param.type)}
            label={param.label}
            variant="outlined"
            inputProps={{ maxLength: param.max ,min: param.mininput }}
            onChange={(e: any)=>{
              param.funcUpdate(e.target);
            }}
            disabled={param.disable}
          />
        </>
      );
    }else{
      return (
        <>
        <InputLabel id="demo-simple-select-label" style={{display:String(param.show)}}>{param.headLabel}</InputLabel>
          <TextField 
            value={param.value}
            required={param.req}
            style={{display:String(param.show)}}
            id={String(param.id)}
            type={String(param.type)}
            label={param.label}
            variant="outlined"
            onChange={(e: any)=>{
              param.funcUpdate(e.target);
            }}
            disabled={param.disable}
          />
        </>
      );
    }
  }else{
    if(param.value===""){
      return (
        <>
        <InputLabel style={{display:String(param.show)}}>{param.headLabel}</InputLabel>
          <TextField
            value={param.value}
            required={param.req}
            style={{display:String(param.show)}}
            id={String(param.id)}
            type={String(param.type)}
            variant="outlined"
            inputProps={{ accept: param.accept }}
            onChange={(e: any)=>{
              param.funcUpdate(e.target.files[0]);
            }}
            disabled={param.disable}
          />
        </>
      );
    }else{
      return (
        <>
        <InputLabel style={{display:String(param.show)}}>{param.headLabel}</InputLabel>
          <TextField
            required={param.req}
            style={{display:String(param.show)}}
            id={String(param.id)}
            type={String(param.type)}
            variant="outlined"
            inputProps={{ accept: param.accept }}
            onChange={(e: any)=>{
              param.funcUpdate(e.target.files[0]);
            }}
            disabled={param.disable}
          />
        </>
      );
    }
    
  }
  

  
};

export const SelectField = ({
  value,
  funcChange,
  idSel,
  label,
  desc,
  disable,
}: InputSelectParam) => {
  return (
    <>
      <InputLabel >{label}</InputLabel>
      <Select
        required
        labelId={String(label)}
        id={String(idSel)}
        value={value}
        onChange={(e) => {
          funcChange(String(e.target.value));
        }}
        disabled={disable}
      >
        {/* default */}
        <MenuItem disabled={true} value="">""</MenuItem>
        {desc &&
          desc.map((item: any) => {
            return <MenuItem key={item.desc} value={item.desc}>{item.desc}</MenuItem>;
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
  disable
}: InputSelectParam) => {
  return (
    <>
      <InputLabel >{label}</InputLabel>
      <Select
        required
        labelId={String(label)}
        id={String(idSel)}
        value={value}
        onChange={(e : any) => {
          // console.log(e.target.value.desc);
          // const item = e.target.value;
          funcChange(String(e.target.value));
        }}
        disabled={disable}
      >
        {/* default */}
        <MenuItem disabled={true} value=""></MenuItem>
        {desc.length > 0 &&
          desc.map((item: any) => {
            return <MenuItem key={item.value} value={item.desc}>{item.desc}</MenuItem>;
          })}
      </Select>
    </>
  );
};
