import { Injectable } from '@nestjs/common';
import { CreateTaskBoardDto } from './dto/create-task-board.dto';
import { Task } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TaskBoardService {
  constructor(private prisma: PrismaService) {}

  async create(createTaskBoardDto: CreateTaskBoardDto) {
    return this.prisma.task.create({
      data: {
        description: createTaskBoardDto.description,
        state: createTaskBoardDto.state,
        icono: createTaskBoardDto.icono,
        createdAt:createTaskBoardDto.createdAt,

      },
    });
  }

  async findAll(): Promise<Task []> {
   return this.prisma.task.findMany()
}
}



  

