import React, { useEffect, useState } from "react";
import {
  InputField,
  SelectField,
  SelectFieldWDesc,
} from "../component/InputField";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);
const InputPage = () => {
  const classes = useStyles();
  const [JenisKelamin, setJenisKelamin] = useState("");
  const [Alasan, setAlasan] = useState("");
  const [isiAlasan, setisiAlasan] = useState("");
  const [FotoKTP, setFotoKTP] = useState(null);
  const [FotoKK, setFotoKK] = useState(null);
  const [hide, sethide] = useState("none");
  const [checked, setchecked] = useState(false);
  const [submit, setSubmit] = useState("submit");
  const [disable, setDisable] = useState(false);
  const [state, setState] = useState({
    Nama: "",
    NIK: "",
    NOKK: "",
    Umur: "",
    Alamat: "",
    RT: "",
    RW: "",
    PSCov19: "",
    PACov19: "",
  });
  const handleChange = (event: any) => {
    setState({ ...state, [event.id]: event.value });
  };
  
  const jkDesc = [
    { desc: "laki-laki", value: 1 },
    { desc: "perempuan", value: 1 },
  ];
  const alasanDesc = [
    { desc: "- Kehilangan pekerjaan", value: 1 },
    { desc: "- Kepala keluarga terdampak atau korban Covid", value: 2 },
    { desc: "- Tergolong fakir/miskin semenjak sebelum Covid", value: 3 },
    { desc: "Lainnya: … (bisa diisi sendiri olehuser)", value: 0 },
  ];

  const onChangeJK = (value: String) => {
    const val = String(value);
    setJenisKelamin(val);
  };
  const onChangeFOTOKTP = (value: any) => {
    setFotoKTP(null);
    if(value){
      if(String(value.type) === "image/jpeg" || String(value.type) === "image/png" || String(value.type) === "image/bmp"){
        if(value.size <= 2097152){
          setFotoKTP(value);
        }else{
          alert("Maaf File Anda terlalu besar")
          setFotoKTP(null);

        }
      }else{
        alert("Maaf File Anda tidak sesuai")
        setFotoKTP(null);
      }
    }
  };
  const onChangeFOTOKK = (value: any) => {
    setFotoKK(null);
    if(value){
      if(String(value.type) === "image/jpeg" || String(value.type) === "image/png" || String(value.type) === "image/bmp"){
        if(value.size <= 2097152){
          setFotoKK(value);
        }else{
          alert("Maaf File Anda terlalu besar")    
          setFotoKK(null);

        }
      }else{
        alert("Maaf File Anda tidak sesuai")
        setFotoKK(null);
      }
    }
  };
  const onChangeAlasan = (value: String) => {
    const val = String(value);
    setisiAlasan("")
    setAlasan(val);
    
  };
  const onChangeIsiAlasan = (value: any) => {
    const val = String(value.value);
    setisiAlasan(val);
  };
  const onChangeCheck = (value: any) => {
    setchecked(value.target.checked);
  };
  const onSubmitForm = (e: any) =>{
    setDisable(true);
    

    if(checkisi() === true){
      const random = Math.floor(Math.random() * 2) + 1;
      console.log("random dari bilangan 1 - 2 = " +random)
      setTimeout(function(){ 
        if(random===1){
          alert("Submit Gagal")
          e.preventDefault();
        }else{
          alert("Submit Sukses")
          e.preventDefault();
        }
        const detail = [];
        detail.push(state);
        detail.push(JenisKelamin);
        detail.push(isiAlasan);
        detail.push(FotoKTP);
        detail.push(FotoKK);
        console.log(detail);
        setDisable(false)
      }, 1500);
      
    }
  }

  useEffect(() => {
    alasanDesc.forEach((item)=>{
      if(item.desc === Alasan){
        if(item.value === 0){
          setisiAlasan("");
          sethide("");
        }else{
          setisiAlasan(Alasan)
          sethide("none");
        }
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Alasan]);
  useEffect(() => {
    if(checkisi()=== true){
      setSubmit("button")
    }else{
      setSubmit("submit")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isiAlasan,state,JenisKelamin,Alasan,FotoKTP,FotoKK,checked,submit]);
  const checkisi = () =>{
    if(checked === true && FotoKK!==null && FotoKTP!==null && isiAlasan!=="" && Alasan!=="" && JenisKelamin!=="" && state.Alamat!=="" && state.NIK!=="" && state.NOKK!=="" && state.Nama!=="" && state.PACov19!=="" &&  state.PSCov19!=="" && state.RT!=="" && state.RW!=="" && Number(state.Umur)>=25 ){
      return true;
    }else{
      return false;
    }
  }

  const override = css`
  display: block;
  margin: 0 auto;
  `;

  return (
    <>
      <Box
        m={1}
        style={{ minHeight: "100vh", width:"80%" }}
      >
        <form className={classes.root} autoComplete="off" noValidate={false}>
          <InputField max={-1} mininput={0} req={true} show="" type="text" id="Nama" label="NAMA" headLabel="NAMA:" accept="" funcUpdate={handleChange} value={state.Nama} disable={disable}/>
          <InputField max={-1} mininput={0} req={true} show=""  type="number" id="NIK" label="NIK" headLabel="NIK:" accept="" funcUpdate={handleChange} value={state.NIK} disable={disable}/>
          <InputField max={-1} mininput={0} req={true} show="" type="number" id="NOKK" label="NO KK" headLabel="NO KK:" accept="" funcUpdate={handleChange} value={state.NOKK} disable={disable}/>
          <InputField max={-1} mininput={0} req={true} show="" type="file" id="FotoKTP" label="" headLabel="Foto KTP:" accept="image/png, image/jpeg, image/bmp" funcUpdate={onChangeFOTOKTP} value={FotoKTP === null && "" } disable={disable}/>
          <InputField max={-1} mininput={0} req={true} show="" type="file" id="FotoKK" label="" headLabel="Foto KK:" accept="image/png, image/jpeg, image/bmp" funcUpdate={onChangeFOTOKK} value={FotoKK === null && ""} disable={disable}/>
          <InputField max={100} mininput={25} req={true} show="" type="number" id="Umur" label="UMUR" headLabel="Umur:" accept="" funcUpdate={handleChange} value={state.Umur} disable={disable}/>
          <SelectField
            value={JenisKelamin}
            funcChange={onChangeJK}
            label="Jenis Kelamin"
            idSel="jk"
            desc={jkDesc}
            disable={disable}
          />
          <InputField max={255} mininput={0} req={true} show="" type="text" id="Alamat" label="ALAMAT" headLabel="Alamat:" accept="" funcUpdate={handleChange} value={state.Alamat} disable={disable}/>
          <InputField max={-1} mininput={0} req={true} show="" type="number" id="RT" label="RT" headLabel="RT:" accept="" funcUpdate={handleChange} value={state.RT} disable={disable}/>
          <InputField max={-1} mininput={0} req={true} show="" type="number" id="RW" label="RW" headLabel="RW:" accept="" funcUpdate={handleChange} value={state.RW} disable={disable}/>
          <InputField max={-1} mininput={0} req={true}
           show=""
            type="number"
            id="PSCov19"
            label="Penghasilan Sebelum Covid"
            headLabel="Penghasilan Sebelum Covid:" 
            accept=""
            funcUpdate={handleChange}
            value={state.PSCov19}
            disable={disable}
          />
          <InputField max={-1} req={true}
            show=""
            type="number"
            id="PACov19"
            label="Penghasilan Setelah Covid"
            headLabel="Penghasilan Setelah Covid:"
            accept=""
            funcUpdate={handleChange}
            value={state.PACov19}
            mininput={0}
            disable={disable}
          />
          <SelectFieldWDesc
            value={Alasan}
            idSel="alasan"
            label="Alasan Membutuhkan Bantuan"
            funcChange={onChangeAlasan}
            desc={alasanDesc}
            disable={disable}
          />
          <InputField value={isiAlasan} mininput={0} max={-1} req={hide === "none"? false : true} show={hide} type="text" id="rw" label="Isi Alasan Anda" headLabel="Isi Alasan Anda:" accept="" funcUpdate={onChangeIsiAlasan} disable={disable}/>

          <FormControlLabel
           control={
          <Checkbox
            required
            checked={checked}
            onChange={onChangeCheck}
            name="checkedB"
            color="primary"
            disabled={disable}
          />
           }
          label="Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut."
      />
        {submit==="submit" ? <Button variant="contained" size="large" color="primary" className={classes.margin} type="submit">
          Submit
        </Button> : <Button variant="contained" size="large" color="primary" className={classes.margin} type="button" onClick={(e)=>onSubmitForm(e)} disabled={disable}>
          Submit
          <div className="MoonLoader">
        <ClipLoader css={override} size={15} color={"#1EDAB4"} loading={disable} />
      </div>
        </Button>}
        </form>
      </Box>
    </>
  );
};

export default InputPage;
