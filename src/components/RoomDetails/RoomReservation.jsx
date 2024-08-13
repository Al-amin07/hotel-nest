import PropTypes from "prop-types";
import Button from "../Shared/Button/Button";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import useAuth from "../../hooks/useAuth";
import BookingModal from "../Modal/BookingModal";

const RoomReservation = ({ room }) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const [state, setState] = useState([
    {
      startDate: new Date(room?.from),
      endDate: new Date(room?.to),
      key: "selection",
    },
  ]);
  const totalPrice =
    parseFloat(
      differenceInCalendarDays(new Date(room?.to), new Date(room?.from))
    ) * room?.price;

  const bookingInfo = {
    ...room,
    totalPrice,
    roomId: room?._id,
    time: new Date(),
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      signInMethod: user?.providerData[0]?.providerId,
    },
  };
  delete bookingInfo._id;

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        {/* Calender */}
        <DateRange
          rangeColors={["#F43F5E"]}
          showDateDisplay={false}
          editableDateInputs={true}
          onChange={(item) => setState(state)}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </div>
      <hr />
      <div className="p-4">
        <Button disabled={room?.booked} onClick={() => setIsOpen(true)} label={room?.booked ? 'Already Booked' : 'Reserve'} />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
        <BookingModal
          setIsOpen={setIsOpen}
          closeModal={closeModal}
          isOpen={isOpen}
          bookingInfo={bookingInfo}
        />
      </div>
    </div>
  );
};

RoomReservation.propTypes = {
  room: PropTypes.object,
};

export default RoomReservation;
