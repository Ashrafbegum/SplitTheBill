import React, { useState } from "react";
import { useState } from "react";

const people = [
  { name: "Alex", initial: "A", tone: "blue" },
  { name: "Jordan", initial: "J", tone: "yellow" },
  { name: "Taylor", initial: "T", tone: "purple" },
];

const expenses = [
  { initial: "D", title: "Dinner at Sora", paidBy: "Alex", amount: "$84.00" },
  { initial: "C", title: "Cab to the concert", paidBy: "Jordan", amount: "$32.50" },
  { initial: "S", title: "Late night snacks", paidBy: "Taylor", amount: "$18.00" },
];

function PersonChip({ person }) {
  return (
    <div className="person-chip">
      <span className={`avatar avatar-${person.tone}`}>{person.initial}</span>
      <span>{person.name}</span>
      <span className="chip-x">×</span>
    </div>
  );
}

function ExpenseRow({ expense }) {
  return (
    <div className="expense-row">
      <div className="expense-icon">{expense.initial}</div>
      <div className="expense-info">
        <strong>{expense.title}</strong>
        <span>Paid by {expense.paidBy}</span>
      </div>
      <strong className="expense-amount">{expense.amount}</strong>
    </div>
  );
}

function BalanceCard({ name, amount, status, positive }) {
  return (
    <div className="balance-card">
      <div className="balance-top">
        <span>{name}</span>
        <span className={positive ? "gets-back" : "owes"}>{status}</span>
      </div>
      <div className={`balance-amount ${positive ? "positive" : "negative"}`}>
        {amount}
      </div>
    </div>
  );
}

export default function App() {

const [people, setPeople] = useState(["Saqib", "Sidrah", "Hasnain", "Mahera"]);
const [nameInput, setNameInput] = useState("");
  return (
    <main className="page">
      <div className="shell">
        <header className="hero">
          <div>
            <div className="eyebrow">GROUP EXPENSES</div>
            <h1>Split the Bill</h1>
            <p>Keep the good times going and the money stuff simple.</p>
          </div>

          <div className="trip-summary">
            <span>WEEKEND IN AUSTIN</span>
            <strong><b>3 people</b> / 3 expenses</strong>
          </div>
        </header>

        <div className="content-grid">
          <section className="card people-card">
            <div className="section-number">01</div>
            <h2>Add people</h2>

            <div className="people-form">
              <input aria-label="Enter a name" placeholder="Enter a name" />
              <button type="button">Add Person</button>
            </div>

            <div className="chips">
              {people.map((person) => (
                <PersonChip key={person.name} person={person} />
              ))}
            </div>
          </section>

          <section className="card expense-form-card">
            <div className="section-number">02</div>
            <h2>Add an expense</h2>

            <div className="expense-inputs">
              <label>
                <span>What was it for?</span>
                <input placeholder="e.g. Dinner" />
              </label>

              <label className="amount-field">
                <span>Amount</span>
                <div className="amount-input">
                  <span>$</span>
                  <input placeholder="0.00" />
                </div>
              </label>
            </div>

            <div className="split-label">Split between</div>

            <div className="participant-grid">
              {people.map((person) => (
                <label className="participant" key={person.name}>
                  <input type="checkbox" defaultChecked />
                  <span>{person.name}</span>
                </label>
              ))}
            </div>

            <button className="add-expense-button" type="button">
              Add expense
            </button>
          </section>

          <section className="card added-card">
            <div className="section-number">03</div>
            <div className="added-heading">
              <h2>Added expenses</h2>
              <strong>$134.50</strong>
            </div>

            <div className="expense-list">
              {expenses.map((expense) => (
                <ExpenseRow key={expense.title} expense={expense} />
              ))}
            </div>
          </section>
        </div>

        <section className="balances">
          <div className="balances-heading">
            <div>
              <div className="section-number">04</div>
              <h2>Balances</h2>
            </div>
            <span>Everything evens out at <strong>$44.83</strong> each</span>
          </div>

          <div className="balance-grid">
            <BalanceCard
              name="Alex"
              status="gets back"
              amount="+$39.17"
              positive
            />
            <BalanceCard
              name="Jordan"
              status="owes"
              amount="-$12.33"
            />
            <BalanceCard
              name="Taylor"
              status="gets back"
              amount="+$8.16"
              positive
            />
          </div>
        </section>
      </div>
    </main>
  );
}