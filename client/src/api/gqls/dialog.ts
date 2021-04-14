export default {
  getDialogList: {
    gql: `query {
      dialogList {
        _id
        level
        context{
          name
          text
        }
        charactor
      }
    }`,
    type: 'query'
  },
  getDialogDetail: {
    gql: `query DIALOG_DETAIL($id: String){
      dialogDetail(id: $id) {
        _id
        level
        context{
          name
          text
        }
        charactor
      }
    }`,
    type: 'query'
  },
  addDialog: {
    gql: ` mutation ADD_DIALOG($dialog: DialogInput){
      addDialog(dialog: $dialog){ 
        _id
        level
        context{
          name
          text
        }
        charactor
      }
    }`,
    type: 'mutate'
  },
  updateDialog: {
    gql: ` mutation UPDATE_DIALOG($dialog: DialogInput){
      updateDialog(dialog: $dialog){ 
        _id
        level
        context{
          name
          text
        }
        charactor
      }
    }`,
    type: 'mutate'
  }
}