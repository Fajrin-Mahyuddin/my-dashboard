"use client";
import React from "react";
import BaseLayout from "components/templates/Layout";
import TextInputWithLabel from "components/molecules/inputs/TextInputWithLabel";
import { useAppDispatch } from "hooks/redux";
import CardViewText from "components/organisms/card/CardViewText";
import { updateNumber, updateText } from "states/state_management/slice";
import Button from "components/molecules/buttons/Button";
import CardViewZustand from "components/organisms/card/CardViewZustand";
import { useTextNumber } from "states/zustand/useTextNumber";

const ReduxPage = () => {
  const dispatch = useAppDispatch();
  const { zustandUpdateText, zustandUpdateNumber } = useTextNumber(
    (state) => state,
  );
  return (
    <BaseLayout>
      <div className="h-full">
        <h2>REDUX</h2>
        <br />
        <div className="grid gap-4 grid-cols-2 mb-6">
          <div className="flex gap-2 flex-col border p-2 rounded-md">
            <TextInputWithLabel
              onUpdate={(e) => dispatch(updateText(e))}
              name="name"
              id="name"
              orient="col"
              placeholder="Type any"
            >
              Input Component
            </TextInputWithLabel>
            <Button
              label="Increase"
              onClick={(e) => dispatch(updateNumber(e as number))}
            />
          </div>
          <CardViewText />
        </div>

        <h2>ZUSTAND</h2>
        <br />
        <div className="grid gap-4 grid-cols-2 mb-4">
          <div className="flex gap-2 flex-col border p-2 rounded-md">
            <TextInputWithLabel
              onUpdate={(e) => zustandUpdateText(e)}
              name="name"
              id="name"
              orient="col"
              placeholder="Type any"
            >
              Input Component
            </TextInputWithLabel>
            <Button
              label="Increase"
              onClick={(e) => zustandUpdateNumber(e as number)}
            />
          </div>
          <CardViewZustand />
        </div>
      </div>
    </BaseLayout>
  );
};

export default ReduxPage;
