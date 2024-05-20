import "./style.scss";
import { AnnouncementType, DailyReward, IAnnouncement } from "./types";
import { ANNOUNCEMENTS, DAILY_REWARDS } from "./mock-data";

export const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="top-line">
        <span className="welcome-msg">Welcome Player!</span>
        <div className="logo">
          <img src="logo.svg" alt="logo" className="image" />
          <span className="name">
            Farm<span className="io">.io</span>
          </span>
        </div>
      </div>

      <section className="daily-rewards">
        <p className="title">Daily Rewards</p>
        <div className="content">
          {DAILY_REWARDS.map((reward, index) => (
            <DailyReward index={index} reward={reward} />
          ))}
        </div>
      </section>

      <section className="active-chest">
        <p className="title">Active Chest</p>
        <div className="content">
          <img src="assets/icons/chest.svg" alt="chest" />
          <div className="text">
            <span className="percent">50%</span>
            <p className="guide">
              Care your pets and interact with other players to unlock the
              chest.
            </p>
          </div>
        </div>
      </section>

      <section className="announcements">
        <p className="title">Announcements</p>
        <div className="content">
          {ANNOUNCEMENTS.map((announcement, index) => (
            <Announcement
              key={index}
              type={announcement.type}
              message={announcement.message}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const Announcement = ({ type, message }: IAnnouncement) => {
  return (
    <p className="announcement">
      {type === AnnouncementType.EVENT && (
        <span className="event">[Event]</span>
      )}
      {type === AnnouncementType.FARM && <span className="farm">[Farm]</span>}
      {type === AnnouncementType.WARNING && (
        <span className="warning">[Warning]</span>
      )}
      {" " + message}
    </p>
  );
};

const DailyReward = ({ index, reward }: { index: number, reward: DailyReward; }) => {
  const todayIndex = new Date().getDay();
  return (
    <div
      className={`reward ${index < todayIndex
        ? "expired"
        : index == todayIndex
          ? "available"
          : "upcoming"
        }`}
      key={index}>
      <img src={reward.imageUrl} alt={reward.name} />
      <span className="date">{reward.date}</span>
    </div>
  );
};