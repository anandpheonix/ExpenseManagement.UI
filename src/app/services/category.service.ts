import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { DataService } from '../shared/data.service';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private url = environment.apiBaseUrl + '/categories';
    constructor(private dataService: DataService) {}

    getCategories() {
        return this.dataService
            .readData(this.url)
            .pipe(map((response) => response as Category[]));
    }

    addCategory(newCategory: Category) {
        return this.dataService
            .createData(this.url, newCategory)
            .pipe(map((response) => response as Category));
    }

    updateCategory(modifiedCategory: Category) {
        return this.dataService
            .updateData(this.url, modifiedCategory)
            .pipe(map((response) => response as Category));
    }

    deleteCategory(id: number) {
        return this.dataService.deleteData(this.url, id);
    }
}
