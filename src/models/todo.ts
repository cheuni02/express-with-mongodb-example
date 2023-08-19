import mongoose from "mongoose";

// interfaces 
interface ITodo {
  title: string;
  description: string;
}

interface ITodoModel extends mongoose.Model<any> {
  build(attr: ITodo): ITodoDocument;
}

interface ITodoDocument extends mongoose.Document {
  title: string;
  description: string;
}

// schemas
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// making build function accessible to instance of schema
todoSchema.statics.build = (attr: ITodo) => {
  return new TodoModel(attr);
}

// new model instanciated with the todo schema
const TodoModel = mongoose.model<ITodoDocument, ITodoModel>('Todo', todoSchema);


TodoModel.build({
  title: "Adventures of Tom Sawyer",
  description: "a classic book to read for the whole family"
});

export { TodoModel };