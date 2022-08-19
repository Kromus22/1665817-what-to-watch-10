import { Tab } from '../const';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const HOUR = 360;

export const getTab = () => {
  const queryParams = (new URL(document.location.href)).searchParams;
  return queryParams.get('tab') ?? Tab.Overview;
};

const enum Rating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

const enum RatePoints {
  Bad = 0,
  LowNormal = 3,
  LowGood = 5,
  HighGood = 8,
  Awesome = 10,
}

function getTextRating(rate?: number) {
  let rating = '';
  if (rate) {
    switch (true) {
      case (rate > RatePoints.Bad && rate < RatePoints.LowNormal):
        rating = Rating.Bad;
        break;
      case (rate >= RatePoints.LowNormal && rate < RatePoints.LowGood):
        rating = Rating.Normal;
        break;
      case (rate >= RatePoints.LowGood && rate < RatePoints.HighGood):
        rating = Rating.Good;
        break;
      case (rate >= RatePoints.HighGood && rate < RatePoints.Awesome):
        rating = Rating.VeryGood;
        break;
      case (rate === RatePoints.Awesome):
        rating = Rating.Awesome;
        break;
    }
  }
  return rating;
}

enum DurationTemplate {
  MinutesSeconds = 'm[:] s',
  HoursMinutesSeconds = 'H[:] m[:] s',
  HoursMinutes = 'H[h] m[m]'
}

enum TimeMetric {
  Second = 'seconds',
  Minute = 'minutes',
}

export const formattingLastTime = (runtime: number) => {
  const timeDuration = dayjs.duration(runtime, TimeMetric.Second);

  if ((runtime / HOUR) < 1) {
    return timeDuration.format(DurationTemplate.MinutesSeconds);
  }

  return timeDuration.format(DurationTemplate.HoursMinutesSeconds);
};

export default getTextRating;


