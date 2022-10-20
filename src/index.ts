import dayjs from 'dayjs'

export const format = (fmt: string) => (value: dayjs.ConfigType) => {
  const v = dayjs(value)
  return v.isValid() ? v.format(fmt) : value;
}

export const fmtDate = format('YYYY/MM/DD HH:mm:ss:SSS')

export const sleep = (time: number) => new Promise<void>(resolve => setTimeout(resolve, time));
