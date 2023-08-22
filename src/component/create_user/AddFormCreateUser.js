import React, { useState,useEffect } from "react";
import axios from "axios";
import * as Nominatim from "nominatim-browser";
import image from "../../image/location.png";
import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'; 
import L from "leaflet";
import qs from "qs"
import "./style.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker} from "react-leaflet";
function AddFormCreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [new_password, setNew_Password] = useState("");
  const [street, setStreet] = useState("");
  const [street2, setStreet2] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [navigate, setNavigate] = useState(false);
  const [FormData, setFormData] = useState({

    partner_latitude: "",
    partner_longitude: "",
  });
  const [partner_latitude, setPartner_latitude] = useState(-6.1754);
  const [partner_longitude, setPartner_longitude] = useState(106.8272);
  const [modalPosition, setModalPosition] = useState([
    partner_latitude,
    partner_longitude,
  ]);

  const handleSuccess = () => {
    Swal.fire({
      title: 'SUCCESS!',
      text: 'Register Berhasil',
      icon: 'success',
      confirmButtonText: 'Okay'
    });
  };

  const handleFailture2 = () => {
    Swal.fire({
      title: 'FAILTURE!',
      text: 'semua input salah isi',
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  };

  const handlePhone2 = () => {
    Swal.fire({
      title: 'SUCCESS!',
      text: `BENAR ANDA ISI ${phone}`,
      icon: 'success',
      confirmButtonText: 'Okay'
    });
  };

  const handleFailture = () => {
    Swal.fire({
      title: 'FAILTURE!',
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  };

  const handleLogin = () => {
    Swal.fire({
      title: 'FAILTURE!',
      text: 'Email sudah terdaftar.',
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  };


  const handleMobile = () => {
    Swal.fire({
      title: 'FAILTURE!',
      text: 'ANGKA TIDAK BOLEH LEBIH DARI 13 ANGKA.',
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  };

  const handlePassword = () => {
    Swal.fire({
      title: 'FAILTURE!',
      text: 'PASSWORD KONFIRMASI HARUS SAMA DENGAN PASSWORD',
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  };
  const handleVerikasi = () => {
    Swal.fire({
      title: 'FAILTURE!',
      text: 'NOMOR HARUS ISI DI AWAL ANGKA 628',
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  };

  const handleSuccesWa = () => {
    Swal.fire({
      title: 'SUCCESS!',
      text: 'SUCCESS KIRIM DATA KE WHASTSAPP',
      icon: 'success',
      confirmButtonText: 'Okay'
    });
  };
  const handleFailtureWa= () => {
    Swal.fire({
      title: 'FAILTURE!',
      text: 'GAGAL KIRIM PESAN DATA KE WHASTSAPP',
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  };
  

  const handleMap = () => {
    Swal.fire({
      title: 'FAILTURE!',
      text: 'TOLONG DI ISI TITIK KOORDINAT MAP',
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  };


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMarkerMove = async (event) => {
    try {
      const { lat, lng } = event.target.getLatLng();
      setModalPosition([lat, lng]);

      const response = await Nominatim.reverseGeocode({
        lat: lat.toString(),
        lon: lng.toString(),
        addressdetails: true,
      });
      setStreet2(response);
      setCity(response.address);
      setZip(response.address);

      setFormData((prevFormData) => ({
        ...prevFormData,
        partner_latitude: lat,
        partner_longitude: lng,
        street2: response.display_name || "",
      }));
    } catch (error) {
    }
  };

  const form = qs.stringify({
    "model" : `${process.env.REACT_APP_REST_API_MODEL_USERS}`,
    "url" : `${process.env.REACT_APP_API_URL}`,
    "db": `${process.env.REACT_APP_API_DB}`,
    username : `${process.env.React_App_API_USERNAME}`,
    password : `${process.env.React_App_API_PASSWORD}`,
    new_password,
    name,
    email,
    "login" : email,
    "mobile" : phone,
    phone,
     street,
    "street2":street2.display_name,
    "city" : city.city_district,
    "zip":zip.postcode,
    "partner_latitude" : modalPosition[0],
    "partner_longitude" : modalPosition[1]
  })
  let apiKeyRegister = `${process.env.REACT_APP_REST_API_CREATE_REGISTER}`;
  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: apiKeyRegister,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: form,
  };
  
  const customIcon = new L.Icon({
    iconUrl: image, 
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  });
  const phoneNumer = parseFloat(phone);
  const maxPhone = 9999999999999; 
  
  const formWa = qs.stringify({
    "api_key" : `${process.env.REACT_APP_REST_API_wa}`,
    "receiver": phone + "@s.whatsapp.net",
    "data": {
      "message": `Terimakasih Sudah register,
      username : ${email},password : ${password} ,password konfirmasi : ${new_password}`
    }
  })
  let apiKeyWA = `${process.env.REACT_APP_REST_API_MESSAGE_VerifikasiWa}`;
  let configWa = {
    method: "POST",
    maxBodyLength: Infinity,
    url: apiKeyWA,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: formWa,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPartner_latitude("");
    setPartner_longitude("");
    if (phoneNumer > maxPhone) {
      handleMobile();
      return;
    }

    if (modalPosition[0] === -6.1754 && modalPosition[1] === 106.8272) {
      handleMap();
      return;
    }

    if(new_password !== password){
      handlePassword();
      return;
    }

    if(phone.startsWith('628')){
        handlePhone2();
    }else{
      handleVerikasi();
      return;
    }

      

    axios
      .request(config)
      .then((response) => {
        if (response) {
             setTimeout(() => {
          handleSuccess();
          }, 5000);
          console.log(response)
        }
      })
      .catch((error) => {
        if (error.response) {
          const responseData = error.response.data;
          if (error.response.status === 400) {
            const errorMessages = Object.values(responseData).flat();
            handleFailture(errorMessages.join("\n"))
            // setTimeout(() => {
            //   window.location.reload();
            // }, 3000);
          } else {
            handleLogin();
            // setTimeout(() => {
            //   window.location.reload();
            // }, 3000);
          }
        } else {
          handleFailture2();
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        }
        console.log(error)
      });
      axios.request(configWa)
      .then((response) => {
        console.log(JSON.stringify(response));
        console.log("uhuyy")
        handleSuccesWa();
                     // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
      })
      .catch((error) => {
        console.log("hasil :" +error);
        if (error) {
        handleFailtureWa();
      }});
  };
  return (
    <>
    <div>{navigate && <Navigate to="/dashboardAdmin" />}</div>
      <div className="max-w-md w-full">
        <div>
          <h2 className="mt-6 text-center text-white text-xl leading-9 font-extrabold text-gray-900 md:text-3xl md:ml-32 lg:ml-[320px] lg:w-[300px] lg:ml-[420px] lg:w-[300px]">REGISTER USER</h2>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 sm:w-[520px] md:w-[630px] lg:w-[900px] xl:w-[1100px]">
              <div>
                <label
                  className="mt-3 block text-gray-700 text-sm font-bold mb-2  ml-2 text-white"
                  htmlFor="name"
                >
                  NAME
                </label>
                <input
                  aria-label="name"
                  name="name"
                  type="text"
                  required
                  className="px-3 py-2 border w-full text-gray-300 bg-transparent border-none border-transparent "
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="-mt-px">
                  <label
                    className="mt-3 block text-gray-700 text-sm font-bold mb-2  ml-2 text-white"
                    htmlFor="email"
                  >
                    EMAIL
                  </label>
                  <input
                    aria-label="email"
                    name="email"
                    type="email"
                    required
                    className="px-3 py-2 border w-full text-gray-300 bg-transparent border-none border-transparent "
                    placeholder="Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                      <label
                    className="block mt-3 text-gray-700 text-sm font-bold mb-2  ml-2 text-white"
                    htmlFor="username"
                  >
                    USERNAME
                  </label>
                  <input
                    aria-label="username"
                    name="username"
                    type="username"
                    required
                    className="px-3 py-2 border w-full text-gray-300 bg-transparent border-none border-transparent "
                    placeholder="username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                      <label
                    className="block text-gray-700 text-sm font-bold mb-2 mt-3 ml-2 text-white"
                    htmlFor="password"
                  >
                    PASSWORD
                  </label>
                  <div className="flex items-center border rounded">
                  <input
                    aria-label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="px-3 py-2 border w-full text-gray-300 bg-transparent border-none border-transparent "
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="border-l px-4"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <RiEyeFill style={{ color: 'white', cursor: 'pointer' }} /> : <RiEyeOffFill    style={{ color: 'white', cursor: 'pointer' }}/>}
                  </button>
                </div>
                      <label
                    className="block mt-3 text-gray-700 text-sm font-bold mb-2  ml-2 text-white"
                    htmlFor="new_password"
                  >
                    KONFIRMASI PASSWORD
                  </label>
                  <div className="flex items-center border rounded">
                  <input
                    aria-label="new_password"
                    name="new_password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="px-3 py-2 border w-full text-gray-300 bg-transparent border-none border-transparent "
                    placeholder="ulang password.."
                    value={new_password}
                    onChange={(e) => setNew_Password(e.target.value)}
                  />
                  <button
                    type="button"
                    className="border-l px-4"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <RiEyeFill style={{ color: 'white', cursor: 'pointer' }} /> : <RiEyeOffFill    style={{ color: 'white', cursor: 'pointer' }}/>}
                  </button>
                </div>
                 <label
                    className="block mt-3 text-gray-700 text-sm font-bold mb-2  ml-2 text-white"
                    htmlFor="phone"
                  >
                    PHONE
                  </label>
                  <input
                    aria-label="phone"
                    name="phone"
                    type="number"
                    required
                    className="px-3 py-2 border w-full text-gray-300 bg-transparent border-none border-transparent "
                    placeholder="no.telp/handphone..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <label
                    className="block mt-3 text-gray-700 text-sm font-bold mb-2  ml-2 text-white"
                    htmlFor="street"
                  >
                    STREET
                  </label>
                  <input
                    aria-label="street"
                    name="street"
                    type="text"
                    required
                    className="px-3 py-2 border w-full text-gray-300 bg-transparent border-none border-transparent "
                    placeholder="Alamat Lengkap.."
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                  <label
                    className="block mt-3 text-gray-700 text-sm font-bold mb-2  ml-2 text-white"
                    htmlFor="Street 2"
                  >
                    SETREET 2
                  </label>
                  <div className="border w-full text-white rounded p-2 text-[12px] md:text-sm">
                    {street2 === "" ? <input   className="px-3 text-white  py-2 border w-full text-gray-300 bg-transparent border-none border-transparent" required placeholder="alamat di tentukan titik map..."/> : street2.display_name}
                  </div>
                  <label
                    className="block mt-3 text-gray-700 text-sm font-bold mb-2  ml-2 text-white"
                    htmlFor="city"
                  >
                    CITY
                  </label>
                  <div className="border w-full text-white rounded p-2 text-[12px] md:text-sm">
                    {city === "" ? <input className="px-3 text-white py-2 border w-full text-gray-300 bg-transparent border-none border-transparent" required placeholder="kota di tentukan titik map..."/> : city.city_district}
                  </div>
                  <label
                    className="block mt-3 text-gray-700 text-white text-sm font-bold mb-2  ml-2 text-white"
                    htmlFor="zip"
                  >
                    ZIP
                  </label>
                  <div className="border w-full text-white rounded p-2 text-[12px] md:text-sm">
                    {zip === "" ? <input className="px-3 text-white py-2 border w-full text-gray-300 bg-transparent border-none border-transparent" required placeholder="kode pos di tentukan titik map..."/> : zip.postcode}
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2  ml-2 text-white"
                      htmlFor="partner latitude"
                    >
                      LATITUDE
                    </label>
                    <input
                      aria-label=" Partner Latitude"
                      name=" Partner Latitude"
                      type="number"
                      required
                      className="px-3 py-2 border w-full text-gray-300 bg-transparent border-none border-transparent"                      placeholder="isi number..."
                      value={modalPosition[0].toFixed(8)}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 ml-2 text-white"
                      htmlFor=" Partner Longitude"
                    >
                     LONGITUDE
                    </label>
                    <input
                      aria-label=" Partner Longitude"
                      name=" Partner Longitude"
                      type="number"
                      required
                      className="px-3 py-2 border w-full text-gray-300 bg-gray-700"              
                      value={modalPosition[1].toFixed(8)}
                    />
                  </div>
                </div>
                <MapContainer
                  center={[partner_latitude, partner_longitude]}
                  zoom={13}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    maxZoom={20}
                  />
                  <Marker
                    position={modalPosition}
                    draggable={true}
                    eventHandlers={{ moveend: handleMarkerMove }}
                    icon={customIcon}
                  />
                </MapContainer>
              </div>
            </div>
            <div className="mt-6 flex justify-items-center">
              <button
                type="submit"
                className="group relative w-32 flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddFormCreateUser;
