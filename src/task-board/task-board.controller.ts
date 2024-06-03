import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskBoardService } from './task-board.service';
import { CreateTaskBoardDto } from './dto/create-task-board.dto';
import { StateService } from './state.service';

@Controller('/task-board')
export class TaskBoardController {
  constructor(private readonly taskBoardService: TaskBoardService, private readonly StateService: StateService) {}

  @Post('/crear')
  create(@Body() createTaskBoardDto: CreateTaskBoardDto) {
    return this.taskBoardService.create(createTaskBoardDto);
  }

  @Get('/obtener')
  findAll() {
    return this.taskBoardService.findAll();
  }

  @Get('/states')
  findAllStates(){
    return this.StateService.findAllStates();

  }
  
}
