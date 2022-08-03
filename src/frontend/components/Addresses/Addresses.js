import { useState, useEffect } from "react";
import "./Addresses.css";
import toast from "react-hot-toast";
import { useAddress, useAuth } from "../../contexts/contextExport";
import { Modal } from "../componentsExport";
import {
  addAddressService,
  editAddressService,
  deleteAddressService,
  getAddressService,
} from "../../services/servicesExport";
const Addresses = () => {
  const {
    auth: { authToken },
  } = useAuth();
  const { dummyAddress, addressDispatch, addressState } = useAddress();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getAddressService(authToken);
      addressDispatch({ type: "ADDRESS", payload: data.address });
    })();
  }, [authToken]);

  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  });

  const toBeEdited = addressState?.addresses.find(
    (add) => add._id === address._id
  );

  async function submitHandler() {
    if (toBeEdited) {
      const data = await editAddressService(address._id, address, authToken);
      addressDispatch({ type: "ADDRESS", payload: data.address });
      toast.success("Address Updated!");
    } else {
      const { data } = await addAddressService(authToken, address);
      addressDispatch({ type: "ADDRESS", payload: data.address });
      toast.success("Address added!");
    }
    setAddress({
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      mobile: "",
    });
    setShowModal(false);
  }

  async function deleteHadler(id) {
    const data = await deleteAddressService(authToken, id);
    addressDispatch({ type: "ADDRESS", payload: data.address });
    setShowModal(false);
    toast.success("Address removed!");
  }

  return (
    <div className="address-page">
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <h2 className="addrs-form-title">Update Address</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler();
            }}
            className="addrs-form-container"
          >
            <input
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
              value={address.name}
              type="text"
              className="ct-input edit-input"
              placeholder="Name"
              required
            />
            <input
              onChange={(e) =>
                setAddress({ ...address, street: e.target.value })
              }
              value={address.street}
              type="text"
              className="ct-input edit-input"
              placeholder="Street"
              required
            />
            <input
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              value={address.city}
              type="text"
              className="ct-input edit-input"
              placeholder="City"
              required
            />
            <input
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
              value={address.state}
              type="text"
              className="ct-input edit-input"
              placeholder="State"
              required
            />
            <input
              onChange={(e) =>
                setAddress({ ...address, country: e.target.value })
              }
              value={address.country}
              type="text"
              className="ct-input edit-input"
              placeholder="Country"
              required
            />
            <input
              onChange={(e) =>
                setAddress({ ...address, zipCode: e.target.value })
              }
              value={address.zipCode}
              type="number"
              className="ct-input edit-input"
              placeholder="6-digit Zipcode"
              maxLength="6"
              required
            />
            <input
              type="number"
              className="ct-input edit-input"
              placeholder="10-digit phone number"
              maxLength="10"
              onChange={(e) =>
                setAddress({ ...address, mobile: e.target.value })
              }
              value={address.mobile}
              required
            />
            <div className="addrs-form-btns">
              {!toBeEdited && (
                <button
                  type="button"
                  onClick={() => setAddress(dummyAddress)}
                  className="ct-btn ct-gray"
                >
                  Fill Dummy
                </button>
              )}
              <button type="submit" className="ct-btn ct-blue">
                {toBeEdited ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </Modal>
      )}
      {addressState?.addresses.length > 0 ? (
        addressState?.addresses.map((addrs) => {
          const { _id, name, street, city, state, country, zipCode, mobile } =
            addrs;
          return (
            <div key={_id} className="user-address">
              <h2>{name}</h2>
              <p>{street}</p>
              <p>
                {city}, {state}, {zipCode}, {country}
              </p>

              <p>{mobile}</p>
              <div className="addrs-btns">
                <button
                  onClick={() => {
                    setShowModal(true);
                    setAddress(addrs);
                  }}
                  className="ct-btn ct-gray"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteHadler(_id)}
                  className="ct-btn ct-red"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="user-address">
          <h2>No address left</h2>
        </div>
      )}
      <div className="add-addrs">
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="ct-btn ct-blue"
        >
          Add Address
        </button>
      </div>
    </div>
  );
};

export { Addresses };
