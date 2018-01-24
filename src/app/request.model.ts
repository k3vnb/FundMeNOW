export class Request {

  constructor ( public category: string,
                public title: string,
                public username: string,
                public email: string,
                public description: string,
                public amount_requested: number,
                public amount_collected: number,
              ) { }


}
