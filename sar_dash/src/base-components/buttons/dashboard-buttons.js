// src/InputComponent.js

function DashboardButton({ label, link, icon }) {
  return (
    <div className="button-container">
      <div className="dashboard-button">
        <img src={icon} />
        <a href={link}>{label}</a>
      </div>
    </div>
  );
}

export default DashboardButton;
