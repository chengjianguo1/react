

 type PropsWithChildren<P> = P & { children: string };
 interface Person{
     name:string;
 }
 type NewPerson = PropsWithChildren<Person>
const newPerson:NewPerson = {
  name:'',
  children:''
}
