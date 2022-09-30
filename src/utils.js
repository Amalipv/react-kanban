export const addElements = () => {
      const task = prompt("Enter the task");
      let newid = (Date.now() / 1000) | 0;

      this.setState((prevState) => ({
        tasks: [...prevState.tasks, { id: newid, value: task }],
      }));
};