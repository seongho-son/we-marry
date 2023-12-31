export interface PostProps {
  thumbnail: string
  images: string[]
  groomName: string
  groomParentsName: ParentsName
  grideName: string
  grideParentsName: ParentsName
  address: string
  location: string
  groomAccount: Account[]
  grideAccount: Account[]
  weddingDate: string
  message: string
  groomPhoneNumber: PhoneNumber[]
  gridePhoneNumber: PhoneNumber[]
  calendarImage: string
  trafficInfo: TrafficInfo
}

export interface ParentsName {
  father: string
  mother: string
}

export interface Account {
  bankName: string
  accountNumber: string
  name: string
}

export interface PhoneNumber {
  phoneNumber: string
  name: string
}

export interface TrafficInfo {
  bus: string
  metro: string
  car: string
}
