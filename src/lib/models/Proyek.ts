import mongoose, { Schema, model, models } from "mongoose";


const ProyekSchema = new Schema({
  nama_proyek: { type: String, required: true },
  deskripsi_proyek: { type: String },
  created_at: { type: Date, default: Date.now },
  id_instansi: { type: Schema.Types.ObjectId, ref: "Instansi", required: true },
});

export default models.Proyek || model("Proyek", ProyekSchema);
