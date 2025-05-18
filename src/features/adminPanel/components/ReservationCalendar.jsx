import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import esES from "date-fns/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";

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
      title: `${booking.room} - ${booking.name} ${booking.paternal_surname} - ${booking.location}`,
      start,
      end,
    };
  });
};

export default function ReservationCalendar({ bookings = [] }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("week"); //  controla la vista

  const reservas = mapBookingToEvents(bookings);

  //   const reservas = [
  //     {
  //       id: 1,
  //       title: 'Juan Pérez - Sala A',
  //       start: new Date(2025, 4, 17, 10, 0),
  //       end: new Date(2025, 4, 17, 11, 0),
  //     },
  //     {
  //       id: 2,
  //       title: 'Ana Gómez - Sala B',
  //       start: new Date(2025, 4, 17, 14, 0),
  //       end: new Date(2025, 4, 17, 15, 30),
  //     },
  //     {
  //       id: 3,
  //       title: 'Carlos Ruiz - Sala A',
  //       start: new Date(2025, 5, 18, 9, 30),
  //       end: new Date(2025, 5, 18, 10, 30),
  //     },
  //   ];

  return (
    <div style={{ height: "95vh", width: "95vw" }}>
      <Calendar
        localizer={localizer}
        events={reservas}
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
          showMore: (total) => `+${total} más`
        }}
        formats={{
          dayFormat: (date, culture, localizer) =>
            localizer.format(date, "eeee", culture),
          weekdayFormat: (date, culture, localizer) =>
            localizer.format(date, "EEEEEE", culture),
          monthHeaderFormat: (date, culture, localizer) =>
            localizer.format(date, "LLLL yyyy", culture),
        }}
      />
    </div>
  );
}
