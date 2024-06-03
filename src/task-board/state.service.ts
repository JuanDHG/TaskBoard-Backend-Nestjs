import { Injectable } from '@nestjs/common';
import { State_Task, Task } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class StateService {
  constructor(private prisma: PrismaService) {}

  
  async findAllStates(): Promise<State_Task[]> {
   return this.prisma.state_Task.findMany()
}
}



  

