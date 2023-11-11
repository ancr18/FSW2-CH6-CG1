import { useContext, useState } from "react";
import { CarContext } from "../../store/car-context";

export default function FilterBox() {
  const { carFilter } = useContext(CarContext);
  const [filter, setFilter] = useState({
    type: "",
    date: "",
    time: "",
    capacity: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    carFilter(filter.type, filter.date, filter.time, filter.capacity);
    console.log(filter);
  };
  return (
    <>
      <section className="search mb-4">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-11 search-section mx-auto p-4">
              <div className="row">
                <div className="col-md-auto col-sm-12">
                  <label>Tipe Driver</label>
                  <select
                    className="form-select"
                    id="tipe"
                    aria-label="Default select example"
                    name="type"
                    value={filter.type}
                    onChange={handleInputChange}
                  >
                    <option value="default" selected>
                      Pilih Tipe Driver
                    </option>
                    <option value="true">Dengan Supir</option>
                    <option value="false">Tanpa Supir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col-md-auto col-sm-12">
                  <label>Tanggal</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                    id="tanggal"
                    name="date"
                    value={filter.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-auto col-sm-12 search__time">
                  <labe>Pilih Waktu Jemput</labe>
                  <select
                    className="form-select"
                    id="waktu"
                    aria-label="Default select example"
                    name="time"
                    value={filter.time}
                    onChange={handleInputChange}
                  >
                    <option value="false" selected>
                      Pilih Waktu
                    </option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                  </select>
                </div>
                <div className="col-md-auto col-sm-12 search__drop">
                  <label>Jumlah Penumpang (optional)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control border-end-0"
                      placeholder="Jumlah Penumpang"
                      id="jumlah"
                      name="capacity"
                      onChange={handleInputChange}
                    />
                    <span className="input-group-text bg-white img-p">
                      <img
                        src="images/fi_users.png"
                        width={20}
                        height={20}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
                <div className="col-md-auto pt-3">
                  <button
                    className="btn-cari fw-bold"
                    type="button"
                    id="load-btn"
                    onClick={handleSubmit}
                  >
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
