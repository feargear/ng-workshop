import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  users = [
    {username: 'darth-vader', description: 'Darth Vader, also known by his birth name Anakin Skywalker, is a fictional character in the Star Wars franchise.[1][2][3] Vader appears in the original film trilogy as a pivotal antagonist whose actions drive the plot, while his past as Anakin Skywalker and the story of his corruption are central to the narrative of the prequel trilogy.'},
    {username: 'donald-duck', description: 'Donald Duck is a cartoon character created in 1934 at Walt Disney Productions. Donald is an anthropomorphic white duck with a yellow-orange bill, legs, and feet. He typically wears a sailor shirt and cap with a bow tie. Donald is most famous for his semi-intelligible speech and his mischievous and temperamental personality. Along with his friend Mickey Mouse, Donald is one of the most popular Disney characters and was included in TV Guides list of the 50 greatest cartoon characters of all time in 2002.[1] He has appeared in more films than any other Disney character,[2] and is the most published comic book character in the world outside of the superhero genre.[3]'}
  ];

  constructor() { }

  getUsers():{username:string, description:string}[]{
    return this.users.slice();
  }

  getUser(index:number){
    return this.users[index];
  }

}
