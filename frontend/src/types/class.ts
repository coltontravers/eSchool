export interface GradeInterface {
    name: string;
    grade: number;
}

export interface UpcomingInterface {
    name: string;
    date: string;
}

export interface FileInterface {
    name: string;
}

export interface ClassInterface {
    name: string;
    teacher: string;
    grade: number;
    time: string;
    recentGrades: GradeInterface[];
    upcoming: UpcomingInterface[];
    files: FileInterface[];
}

export default ClassInterface;
