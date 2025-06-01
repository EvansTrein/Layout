import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', () => {
  const contacts: {
    contacts: string;
    city: string;
    addres: string;
    phone1: string;
    phone2: string;
    mail: string;
    callback: string;
  } = {
    contacts: 'КОНТАКТЫ',
    city: 'Красноярск',
    addres: 'ул. Телевизионная 1, стр. 14, оф. 204',
    phone1: '+7 (391) 209 57-57',
    phone2: '+7 (391) 215 54-33',
    mail: 'los-bio@mail.ru',
    callback: 'Заказать звонок',
  };

  const requisites: {
    name: string;
    tin: string;
    kpp: string;
    ogrn: string;
  } = {
    name: 'ООО «ТОРГОВЫЙ ДОМ «ЛОС-БИО»',
    tin: '2463123719',
    kpp: '246301001',
    ogrn: '1212400008688',
  };

  const company: {
    company: string;
    about: string;
    projects: string;
    catalog: string;
    contacts: string;
  } = {
    company: 'КОМПАНИЯ',
    about: 'О компании',
    projects: 'Проекты',
    catalog: 'Каталог',
    contacts: 'Контакты',
  };

  const catalog: {
    catalog: string;
    kns: string;
    tanks: string;
    stormwaterTreatmentFacilities: string;
    domesticWastewaterTreatmentFacilities: string;
    accessories: string;
  } = {
    catalog: 'КАТАЛОГ',
    kns: 'КНС',
    tanks: 'Ёмкости',
    stormwaterTreatmentFacilities: 'Ливневые очистные-сооружения',
    domesticWastewaterTreatmentFacilities: 'Хозяйственно-бытовые очистные сооружения',
    accessories: 'Комплектующие',
  };

  const whyСhoose: string[] = [
    'Срок службы 50 лет',
    'Монтаж за 1 день',
    'Производительность до 15 человек',
    'Устойчивость к залповым сборсам',
    'Отказ от ассенизационной машины',
    'Работает при отключенной электроэнергии',
  ];

  const whyChooseMap: Record<string, string> = {
    ЭКОНОМИЧНОСТЬ: 'Приобретая станцию у производителя, вы добьетесь максимальной экономии',
    ЭКОЛОГИЧНОСТЬ: 'Стоки, прошедшие через установку, полностью безопасны для окружающей среды',
    ДОЛГОВЕЧНОСТЬ: 'Стеклопластиковый корпус прослужит не менее 50 лет',
    АВТОНОМНОСТЬ: 'Вам не нужно вмешиваться в работу станции - она работает сама',
    'ПРОСТОТА УСТАНОВКИ': 'Монтаж за 1 день, без значительных земляных работ',
    НАДЕЖНОСТЬ: 'Смолы импортных производителей — залог нашей надежности',
  };

  return { contacts, requisites, company, catalog, whyСhoose, whyChooseMap };
});
