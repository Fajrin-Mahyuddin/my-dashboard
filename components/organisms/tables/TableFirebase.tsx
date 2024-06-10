import React, { Fragment, useEffect, useState } from "react";
import SkeletonTable from "components/organisms/skeleton/Tabel";
import { useFirebase } from "hooks/useFirebase";
import { TrashIcon } from "@heroicons/react/24/outline";
import { TUsers } from "types/users";
import ModalContainer from "components/organisms/modal/Modal";

const TableFirebase = () => {
  const { lists, delItem, get, isLoading: isGetDataLoading } = useFirebase();
  const [user, setUser] = useState<TUsers | null>(null);

  useEffect(() => {
    get();
  }, [get]);

  return (
    <Fragment>
      <table className="border-collapse border-spacing-6 mt-10 table-auto w-full">
        <thead>
          <tr className="bg-[#131B2E] text-[#fff] text-left border-b-2 border-b-black">
            <th className="py-4 pl-2">Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {isGetDataLoading ? (
            <SkeletonTable isLoading={isGetDataLoading} rows={5} cols={2} />
          ) : (
            <Fragment>
              {lists &&
                lists.map((item, i) => {
                  return <ListItem {...item} setUser={setUser} key={i} />;
                })}
            </Fragment>
          )}
        </tbody>
      </table>
      <ModalContainer del={delItem} setUser={setUser} user={user} />
    </Fragment>
  );
};

const ListItem = ({
  name,
  address,
  gender,
  phone,
  id,
  desc,
  setUser,
}: TUsers & { setUser: (e: TUsers | null) => void }) => {
  return (
    <tr className="border-b-[1px] border-b-[#dfdfdf] [&>td]:py-3 ">
      <td className="pl-2">{name}</td>
      <td>{gender}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td className="text-right pr-4">
        <button
          onClick={() => setUser({ id, name, gender, phone, address, desc })}
          className="text-[#F26440]"
        >
          <TrashIcon className="size-4" />
        </button>
      </td>
    </tr>
  );
};

export default TableFirebase;
