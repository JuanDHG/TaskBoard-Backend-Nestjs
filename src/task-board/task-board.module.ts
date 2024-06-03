import { Module } from '@nestjs/common';
import { TaskBoardService } from './task-board.service';
import { TaskBoardController } from './task-board.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { StateService } from './state.service';

@Module({
  controllers: [TaskBoardController],
  providers: [TaskBoardService,StateService],
  imports:[PrismaModule]
})
export class TaskBoardModule {}
