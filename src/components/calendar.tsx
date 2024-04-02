import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { EventInput } from "@fullcalendar/core";

const FinanceWindow: React.FC = () => {
  // Dummy data for scheduled activities
  const [scheduledActivities, setScheduledActivities] = useState<EventInput[]>([
    { id: "1", title: "Hiking Trip", date: "2024-04-01" },
    { id: "2", title: "City Tour", date: "2024-04-05" },
    { id: "3", title: "Beach Party", date: "2024-04-10" },
  ]);

  // Dummy data for shared expenses
  const [sharedExpenses, setSharedExpenses] = useState<
    { id: string; name: string; amount: number }[]
  >([
    { id: "1", name: "John", amount: 50 },
    { id: "2", name: "Alice", amount: 30 },
    { id: "3", name: "Bob", amount: 70 },
  ]);

  // Function to handle adding a new expense
  const handleAddExpense = () => {
    const name = prompt("Enter name:");
    const amountStr = prompt("Enter amount:");
    if (name && amountStr) {
      const amount = parseFloat(amountStr);
      if (!isNaN(amount)) {
        const newExpense = { id: `${sharedExpenses.length + 1}`, name, amount };
        setSharedExpenses([...sharedExpenses, newExpense]);
      } else {
        alert("Invalid amount. Please enter a valid number.");
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#c2c2c2s", // Orange background color
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)", // Bubbly 3D effect
      }}
    >
      <div className="calendar-section" style={{ marginBottom: "20px" }}>
        <h3>Calendar</h3>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={scheduledActivities}
        />
      </div>
      <div className="finance-section">
        <h3>Shared Expenses</h3>
        <h5>Adventure Seekers Hiking Trip</h5>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {sharedExpenses.map((expense) => (
            <li key={expense.id} style={{ marginBottom: "5px" }}>
              {expense.name}: ₹{expense.amount.toFixed(2)}
            </li>
          ))}
        </ul>
        <button
          style={{
            backgroundColor: "#ff8c00",
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleAddExpense}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default FinanceWindow;
