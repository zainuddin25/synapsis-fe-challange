# COMPONENTS FOLDER

The component folder is used to store a view that can be used in many files or is reuseable. This makes it easier not to write code repeatedly with the same appearance

- [/blog](https://github.com/zainuddin25/synapsis-fe-challange/tree/master/src/components/blog)
  This folder is used for specific components used in modules or Blog pages. There is a ModalCreate.tsx file as a component used in a specific module, namely Blog
- [/layout](https://github.com/zainuddin25/synapsis-fe-challange/tree/master/src/components/layout)
  This folder is useful for storing layout components used in the next js project. There is a Header.tsx file which is called in **[/src/app/layout.tsx](https://github.com/zainuddin25/synapsis-fe-challange/blob/master/src/app/layout.tsx)** as the default component header. This component is called on all pages
- [/user](https://github.com/zainuddin25/synapsis-fe-challange/tree/master/src/components/user)
  This folder is used for specific components used in modules or User pages. There is a ModalCreate.tsx file as a component used in a specific module, namely User
- [CardBlog.tsx](https://github.com/zainuddin25/synapsis-fe-challange/blob/master/src/components/CardBlog.tsx)
 is a UI component that is used on **`/blog`** and **`/my-blog`** pages. This file was created to make it easier not to write the same code twice in 2 different files
- [CardComment.tsx](https://github.com/zainuddin25/synapsis-fe-challange/blob/master/src/components/CardComment.tsx)
is a UI component file used to display a list of comments. used on the detail page when displaying comments
- [Pagination.tsx](https://github.com/zainuddin25/synapsis-fe-challange/blob/master/src/components/Pagination.tsx)
is a UI component for changing data in the card list and user list
- [Table.tsx](https://github.com/zainuddin25/synapsis-fe-challange/tree/master/src/components)
is a UI component for the user's list display