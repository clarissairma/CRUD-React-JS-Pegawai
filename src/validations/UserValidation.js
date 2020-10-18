const UserValidation = (values) => {
  const errors = {};

  if (!values.id || values.id === "") {
    errors.id = "ID harus diisi";
  }

  if (!values.namaLengkap || values.namaLengkap === "") {
    errors.namaLengkap = "Nama harus diisi";
  }

  if (!values.noKtp || values.noKtp === "") {
    errors.noKtp = "No KTP harus diisi";
  }

  if (!values.alamat || values.alamat === "") {
    errors.alamat = "Alamat harus diisi";
  }

  return errors
};

export default UserValidation;
