import { Project } from '~/lib/interfaces'
import { TechType } from '~/lib/enums'

const projectData: Project[] = [
  {
    id: 0,
    title: 'ShopAir - E-Commerce Mobile Application',
    techType: TechType.Mobile,
    openType: 'live_demo',
    overview:
      'Acquire the knowledge of building cross-platform applications using React Native and constructing fundamental databases, offering a basic API for app operations.',
    technologyUsageId: [3, 6, 7, 11],
    imagePreviews: [
      'https://github.com/soyoongdev/ShoppingApp-Webadmin/assets/63950809/fe65998f-bc18-4087-91b1-41e7250ef1ab',
      'https://github.com/soyoongdev/ShoppingApp-Webadmin/assets/63950809/6fa1a768-ed97-4821-85b7-f90e1a5e58ae',
      'https://github.com/soyoongdev/ShoppingApp-Webadmin/assets/63950809/7afbee9d-5909-4ede-aec0-c85f50d6163b',
      'https://github.com/soyoongdev/ShoppingApp-Webadmin/assets/63950809/e51dfcd6-32db-48ea-89d5-d55791b0494d',
      'https://github.com/soyoongdev/ShoppingApp-Webadmin/assets/63950809/c66d1473-eedf-4d10-9452-ab122e51413f',
      'https://github.com/soyoongdev/ShoppingApp-Webadmin/assets/63950809/e54d94dd-989b-402d-a8bd-598be4dfddc7',
    ],
    url: 'https://github.com/soyoongdev/ShoppingApp-Webadmin.git',
  },
  {
    id: 1,
    title: 'ThietThach Group',
    techType: TechType.iOS,
    openType: 'view_on_store',
    overview:
      'Participating in the project development journey from its inception to completion, gaining insight into the project development process, and deploying the project to the AppStore for customer use. Learning how to work in a team at a technology company, communicating between relevant departments, holding team meetings, discussions, and collectively devising development methods. Enhancing project development skills, coding skills, and tackling tasks of varying complexity.',
    technologyUsageId: [0, 17, 16, 18],
    imagePreviews: [
      'https://thietthach.vn/html_response/gioi-thieu-app-thiet-thach/section1/LandingAppTTG-02.png',
    ],
    url: 'https://apps.apple.com/vn/app/thiet-thach/id1610695962',
  },
  {
    id: 2,
    title: 'TiTi Calculator',
    techType: TechType.iOS,
    openType: 'live_demo',
    overview:
      'The TiTiCalculator app is similar to the Calculator on the iPhone, but it includes additional features such as: Exchange rate conversion, currency conversion, detailed reading of numbers in words, up-to-date data, light and dark mode, and offline usability. The app features a fresh, modern, and user-friendly interface.',
    technologyUsageId: [0],
    imagePreviews: [
      'https://user-images.githubusercontent.com/63950809/220032096-83ce1575-bad4-473c-a00f-5e537ff8b762.png',
      'https://user-images.githubusercontent.com/63950809/220032011-8da2ea20-53b0-4630-893a-9d4d7b001e2d.png',
    ],
    url: 'https://github.com/soyoongdev/TiTiCalculator.git',
  },
  {
    id: 3,
    title: 'MoveStream (Netflix clone)',
    techType: TechType.FullStack,
    openType: 'live_demo',
    overview:
      'The Mova Stream project is an online movie streaming platform, with a user interface similar is like Netflix, featuring a fresh, modern design that ensures user-friendly experience. This is my first FullStack project, developed using cutting-edge and modern technologies, aiming for swift and smooth development, while maintaining easily maintainable and upgradable source code. The project primarily focuses on seamless performance and efficiency for users.',
    technologyUsageId: [4, 2, 6, 7, 8, 9, 10, 12, 13],
    imagePreviews: [
      'https://user-images.githubusercontent.com/63950809/220150452-6ac96578-10b1-4c3a-b3af-f06363bd8cea.png',
    ],
    url: 'https://github.com/soyoongdev/Mova-Stream.git',
  },
  {
    id: 4,
    title: 'PHUNG NGUYEN GARMENT (Website)',
    techType: TechType.FullStack,
    openType: 'live_demo',
    overview:
      'Initiated, developed, and managed projects from inception to the present. Experienced in project management, source code management with strict version control and standardized formatting. Continuously enhancing programming and project development skills, collaborating effectively within teams, and more.',
    technologyUsageId: [2, 4, 5, 6, 7, 8, 9, 10, 12, 16, 17, 18],
    imagePreviews: [
      'https://github.com/user-attachments/assets/483330dd-5fad-42bf-b150-e60451911d83',
    ],
    url: 'https://phungnguyengarment.vn/',
  },
  {
    id: 4,
    title: 'PHUNG NGUYEN GARMENT (Management Application)',
    techType: TechType.FullStack,
    openType: 'live_demo',
    overview:
      'Initiated, developed, and managed projects from inception to the present. Experienced in project management, source code management with strict version control and standardized formatting. Continuously enhancing programming and project development skills, collaborating effectively within teams, and more.',
    technologyUsageId: [2, 4, 5, 6, 7, 8, 9, 10, 12, 16, 17, 18],
    imagePreviews: [
      'https://github.com/user-attachments/assets/0782a930-0ff4-4c94-9ba1-4d01bea3fdc7',
      'https://github.com/user-attachments/assets/9ec2a1ab-5f66-472c-931d-d7d604356b6f',
    ],
    url: 'https://management.phungnguyengarment.vn/',
  },
]

export default projectData
