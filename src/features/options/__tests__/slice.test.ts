import db from "../db";
import { deepMergeOptions, optionsReducer } from "../slice";
import { PartialVideomailRecorderOptions } from "../types";

// The reason we do not add unit tests for reducers but for slice instead
// is to leverage better TypeScript support without the need for helper functions.
describe("slice", () => {
  describe("reducers", () => {
    describe("deepMergeOptions", () => {
      it("returns original state if payload is undefined", () => {
        const action = deepMergeOptions(undefined);
        const result = optionsReducer(db, action);

        expect(result).toStrictEqual(db);
      });

      it("can disable audio", () => {
        const partialOptions: PartialVideomailRecorderOptions = {
          audio: { enabled: false },
        };

        const action = deepMergeOptions(partialOptions);
        const result = optionsReducer(db, action);

        expect(result.audio.enabled).toBeFalsy();
      });
    });
  });
});
