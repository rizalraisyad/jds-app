import React, { useState } from "react";
import {
  InputField,
  SelectField,
  SelectFieldWDesc,
} from "../component/InputField";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "90%",
      },
    },
  }),
);
const InputPage = () => {
  const classes = useStyles();
  const [JenisKelamin, setJenisKelamin] = useState("");
  const [Alasan, setAlasan] = useState("");
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
  const onChangeAlasan = (value: String) => {
    const val = String(value);
    setAlasan(val);
  };

  return (
    <>
      <Box
        m={1}
        style={{ height: "100vh", display: "flex", justifyContent: "center" }}
      >
        <form className={classes.root} autoComplete="off">
          <InputField type="text" id="nama" label="NAMA" />
          <InputField type="number" id="nik" label="NIK" />
          <InputField type="number" id="noKK" label="NO KK" />
          {/* <InputField type="file" id="fotoKtp" label="Foto KTP" />
             <InputField type="file" id="fotoKK" label="Foto KK" /> */}
          <InputField type="number" id="umur" label="UMUR" />
          <SelectField
            value={JenisKelamin}
            funcChange={onChangeJK}
            label="Jenis Kelamin"
            idSel="jk"
            desc={jkDesc}
          />
          {/* <InputField type="text" id="alamat" label="ALAMAT" /> */}
          <InputField type="text" id="rt" label="RT" />
          <InputField type="text" id="rw" label="RW" />
          <InputField
            type="number"
            id="gajiSblmC19"
            label="Penghasilan Sebelum Covid"
          />
          <InputField
            type="number"
            id="gajiStlhC19"
            label="Penghasilan Setelah Covid"
          />
          <SelectFieldWDesc
            value={Alasan}
            idSel="alasan"
            label="Alasan Membutuhkan Bantuan"
            funcChange={onChangeAlasan}
            desc={alasanDesc}
          />
        </form>
      </Box>
    </>
  );
};

export default InputPage;
