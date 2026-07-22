import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import type { CreateTaskDTO  } from "../types/Task";

import type { ITask } from "../types/Task";


export const taskService = {

  getTasks(
  userId: string,
  callback: (tasks: ITask[]) => void
) {

  const tasksRef = collection(
    db,
    "users",
    userId,
    "tasks"
  );

  const q = query(tasksRef);

  return onSnapshot(q, (snapshot) => {

    const tasks: ITask[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<
        ITask,
        "id"
      >),
    }));

    callback(tasks);
  });
},

  async createTask(task: CreateTaskDTO) {
  try {
    

    const tasksRef = collection(
      db,
      "users",
      task.userId,
      "tasks"
    );

    

    const docRef = await addDoc(tasksRef, {
      ...task,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    

    return docRef.id;

  } catch (error) {
    console.error("ERRO DENTRO DO SERVICE:", error);
    throw error;
  }
}
  
};

