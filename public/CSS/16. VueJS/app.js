const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      name: "",
      x: 0,
      y: 0,
      students: [
        {
            name: "Ion Creanga",
            age: 33
        },
        {
            name: "Mihai Eminescu",
            age: 30
        },
        {
            name: "Vasile Alecsandri",
            age: 18
        }
      ],
      studentName: "",
      studentAge: "",
      mark: 5

    },
    computed: {
        reversedName(){
            return this.name.split("").reverse().join("");
        },
        sum() {
            return Number(this.x) + Number(this.y);
        }
    },
    methods: {
        addStudent(){
            this.students.push({
                name: this.studentName,
                age: this.studentAge
            });
        },
        deleteStudent(id){
            this.students.splice(id, 1);
        }
    }
})