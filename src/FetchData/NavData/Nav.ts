interface IsNavData {
  id: number;
  title: string;
}

interface isProfile {
  name: string;
  dob: string;
  address: string;
  email: string;
  phone: string;
}

export const Nav_Data: Array<IsNavData> = [
  {
    id: 1,
    title: "Giới thiệu",
    // title : "About"
  },
  {
    id: 2,
    title: "Học vấn",
    // title : "Education"
  },

  {
    id: 3,
    title: "Hồ sơ",
    // title : "Profile"
  },

  {
    id: 4,
    title: "Kinh nghiệm",
    // title : "Experience"
  },
  {
    id: 5,
    title: "Kỹ năng",
    // title : "Skills"
  },
  {
    id: 6,
    title: "Liên hệ",
    // title : "Contact"
  },
];

export const profile: isProfile = {
  name: "Trần Hữu Thiện",
  dob: "28/10/1998",
  address:
    "76/26 Lê Văn Chí , phường Linh Trung , quận Thủ Đức , thành phố HCM",
  email: "tranhuuthien98@gmail.com",
  phone: "0399376611",
};
