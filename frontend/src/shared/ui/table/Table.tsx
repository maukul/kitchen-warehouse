import { clsx } from 'clsx';

import { TableProps } from './type';

export const Table = (props: TableProps) => {
  const { className, thead, tbodyClassName, itemsRow } = props;

  return (
    <div className="overflow-x-auto">
      <table
        className={clsx({
          table: true,

          ...className,
        })}
      >
        {/* head */}
        {thead && (
          <thead
            className={clsx({
              ...thead.className,
            })}
          >
            <tr
              className={clsx({
                ...thead.trClassName,
              })}
            >
              {thead.items.map((item) => (
                <th
                  className={clsx({
                    ...item.className,
                  })}
                >
                  {item.label}
                </th>
              ))}
            </tr>
          </thead>
        )}
        {/* end head */}

        {/* body */}
        <tbody
          className={clsx({
            ...tbodyClassName,
          })}
        >
          {itemsRow.map((row) => (
            <tr
              className={clsx({
                ...row.trClassName,
              })}
            >
              {row.items.map((item) => (
                <th
                  className={clsx({
                    ...item.className,
                  })}
                >
                  {item.data}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
        {/* end body */}
      </table>
    </div>
  );
};
