import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import esES from "date-fns/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./reservationCalendar.css";

export default function ReservationCalendar({ bookings = [] }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month"); //  controla la vista

  const locales = { es: esES };

  const localizer = dateFnsLocalizer({
    format: (date, formatStr, options) =>
      format(date, formatStr, { ...options, locale: esES }),
    parse: (value, formatStr) =>
      parse(value, formatStr, new Date(), { locale: esES }),
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
    getDay,
    locales,
  });

  const mapBookingToEvents = (bookings) => {
    return bookings.map((booking) => {
      const start = new Date(`${booking.date}T${booking.start_time}`);
      const end = new Date(start.getTime() + 60 * 60 * 1000);

      return {
        id: booking.id,
        title: `${booking.room}`,
        location: `${booking.location}`,
        name: `${booking.name} ${booking.paternal_surname} ${booking.maternal_surname}`,
        start,
        end,
      };
    });
  };

  const bookingEvents = mapBookingToEvents(bookings);

  const components = {
    event: (props) => {
      
      const eventType = props?.event?.location;

      const startTime = new Date(props?.event?.start).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      const endTime = new Date(props?.event?.end).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      switch (eventType) {
        case "Guardia Vieja":
          return (
            <div className="custom-event custom-event-color-1">
              {props.event.title} | {props.event.location} {startTime}-{endTime}{" "}
              | {props.event.name}
            </div>
          );
        case "Avenida Providencia":
          return (
            <div className="custom-event custom-event-color-2">
              {props.event.title} | {props.event.location} {startTime}-{endTime}{" "}
              | {props.event.name}
            </div>
          );
      }
    },
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Calendar
        localizer={localizer}
        events={bookingEvents}
        startAccessor="start"
        endAccessor="end"
        date={currentDate}
        onNavigate={(date) => setCurrentDate(date)}
        view={currentView}
        onView={(view) => setCurrentView(view)} // maneja cambio de vista
        views={["month", "week", "day"]}
        step={30}
        timeslots={2}
        style={{ height: 500 }}
        messages={{
          today: "Hoy",
          previous: "Anterior",
          next: "Siguiente",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          noEventsInRange: "No hay reservas",
          showMore: (total) => `+${total} más`,
        }}
        formats={{
          dayFormat: (date, culture, localizer) =>
            localizer.format(date, "eee", culture),
          weekdayFormat: (date, culture, localizer) =>
            localizer.format(date, "EEEEEE", culture),
          monthHeaderFormat: (date, culture, localizer) =>
            localizer.format(date, "LLLL yyyy", culture),
        }}
        components={components}
      />
    </div>
  );
}
