import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import type { CreateTaskDTO  } from "../types/Task";

export const taskService = {
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