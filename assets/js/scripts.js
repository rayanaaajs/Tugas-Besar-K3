const dataJSON = {
  sop_list: [
    {
      id: 1,
      filename: "sop_kontraktor_k3.html",
      judul_lengkap: "SOP K3 Bagi Kontraktor",
      icon: "activity",
    },
    {
      id: 2,
      filename: "sop_penambangan_pengelolaan_biji.html",
      judul_lengkap: "SOP Penambangan & Pengolahan Bijih",
      icon: "broadcast",
    },
    {
      id: 3,
      filename: "sop_operasional_kendaraan_ringan.html",
      judul_lengkap:
        "SOP Pengelolaan & Operasional Kendaraan Ringan di Area PTFI",
      icon: "easel",
    },
    {
      id: 4,
      filename: "sop_pengaman_mesin_LOTOTO.html",
      judul_lengkap:
        "SOP Pengimplementasian Persyaratan Minimum Untuk Aplikasi Lockout, Tagout and Tryout (LOTOTO)",
      icon: "bounding-box-circles",
    },
    {
      id: 5,
      filename: "sop_pemasangan_pengaman_mesin.html",
      judul_lengkap: "SOP Pemasangan & Perawatan Pengaman Mesin",
      icon: "gear",
    },
    {
      id: 6,
      filename: "sop_pengelolaan_lingkungan.html",
      judul_lengkap:
        "SOP Pengelolaan Lingkungan dan Pemantauan Kualitas Udara, Air, dan Limbah",
      icon: "wind",
    },
    {
      id: 7,
      filename: "sop_ventilasi_tambang.html",
      judul_lengkap: "SOP Ventilasi Tambang (untuk tambang bawah tanah)",
      icon: "fan",
    },
    {
      id: 8,
      filename: "sop_pengendalian_air_tambang.html",
      judul_lengkap: "SOP Pengendalian Air Tambang (Mine Dewatering)",
      icon: "droplet",
    },
    {
      id: 9,
      filename: "sop_pengendalian_air_asam_tambang.html",
      judul_lengkap: "SOP Pengelolaan Air Asam Tambang (AAT/AMD)",
      icon: "radioactive",
    },
    {
      id: 10,
      filename: "sop_alat_berat.html",
      judul_lengkap:
        "SOP Pemeliharaan Alat Berat (Excavator, Haul Truck, Bulldozer, Loader)",
      icon: "truck",
    },
    {
      id: 11,
      filename: "sop_pembukaan_lahan.html",
      judul_lengkap: "SOP Pembukaan Lahan (Land Clearing)",
      icon: "geo",
    },
    {
      id: 12,
      filename: "sop_peledakan_tambang.html",
      judul_lengkap: "SOP Peledakan Tambang (Drilling & Blasting)",
      icon: "lightning-charge",
    },
    {
      id: 13,
      filename: "sop_pengelolaan_lingkungan_tambang.html",
      judul_lengkap: "SOP Pengelolaan Lingkungan Tambang",
      icon: "leaf",
    },
    {
      id: 14,
      filename: "sop_workshop_&_welding_safety.html",
      judul_lengkap: "SOP Workshop & Welding Safety",
      icon: "gear",
    },
    {
      id: 15,
      filename: "sop_eksplorasi.html",
      judul_lengkap: "SOP Eksplorasi (Mapping, Drilling, Sampling)",
      icon: "map",
    },
    {
      id: 16,
      filename: "sop_qa_qc.html",
      judul_lengkap: "SOP QA/QC Geologi",
      icon: "gear",
    },
  ],
};

function cardSOP(sopArray) {
  const container = document.getElementById("list-sop");
  container.innerHTML = "";

  sopArray.forEach((data) => {
    const card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6");
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", "100");

    card.innerHTML = `
        <div class="service-item position-relative">
            <div class="icon">
                <i class="bi bi-${data.icon}"></i>
            </div>
            <a href="${data.filename}" class="stretched-link">
                <h3>${data.judul_lengkap}</h3>
            </a>
        </div>
    `;

    container.appendChild(card);
  });
}

cardSOP(dataJSON.sop_list);
