import { links } from '@/shared/constants/links';

export const menuItems = [
  {
    label: (
      <>
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content w-10 mask mask-squircle">
            <span className="text-xl">LW</span>
          </div>
        </div>
        <h2>Lewandiwka</h2>
      </>
    ),
    link: links.reports,
  },
  {
    label: 'Звіти',
    link: links.reports,
  },
  {
    label: 'Меню',
    link: links.menu,
  },
  {
    label: 'Шаблони меню',
    link: links.templatesMenu,
  },
  {
    label: 'Страви',
    link: links.dishes,
  },
  {
    label: 'Продукти',
    link: links.warehouses,
  },
  {
    label: 'Типи',
    link: links.types,
  },
];
