export default (date: Date) => {
  const today = Math.floor(new Date().getTime() / 1000);
  const timestamp = Math.floor(date.getTime() / 1000);

  const diff = today - timestamp;
  if (diff < 60) return "Just now";

  let time = diff;
  let type = "seconds";

  if (diff < 3600) {
    time = Math.floor(diff / 60);
    type = "minute";
  } else if (diff < 86400) {
    time = Math.floor(diff / 3600);
    type = "hour";
  } else if (diff < 2620800) {
    time = Math.floor(diff / 86400);
    type = "day";
  } else if (diff < 31449600) {
    time = Math.floor(diff / 2620800);
    type = "month";
  } else {
    time = Math.floor(diff / 31449600);
    type = "year";
  }

  const formatter = new Intl.RelativeTimeFormat("en", { style: "narrow" });
  return formatter.format(-time, type as Intl.RelativeTimeFormatUnit);
};
