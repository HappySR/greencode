/** @type {import("../pb_data/types.d.ts")} */
migrate(
  (app) => {
    const collection = new Collection({
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text",
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text1579384326",
          max: 500,
          min: 3,
          name: "name",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: false,
          type: "text",
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text1843675174",
          max: 3000,
          min: 3,
          name: "description",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: false,
          type: "text",
        },
        {
          cascadeDelete: false,
          collectionId: "pbc_1219621782",
          hidden: false,
          id: "relation1874629670",
          maxSelect: 999,
          minSelect: 0,
          name: "tags",
          presentable: false,
          required: false,
          system: false,
          type: "relation",
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate",
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate",
        },
      ],
      id: "pbc_3458742876",
      indexes: ["CREATE UNIQUE INDEX `idx_SQQKjqc8gB` ON `problems` (`name`)"],
      listRule: "",
      name: "problems",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "",
    });

    return app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("pbc_3458742876");

    return app.delete(collection);
  },
);
