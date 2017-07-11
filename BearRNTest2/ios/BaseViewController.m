//
//  BaseViewController.m
//  BearRNTest2
//
//  Created by apple on 2017/7/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "BaseViewController.h"

@interface BaseViewController ()

@end

@implementation BaseViewController

- (instancetype)init
{
  self = [super init];
  
  if (self) {
    [self initSet];
  }
  
  return self;
}

- (void)initSet
{
  self.contentView = [[UIView alloc] initWithFrame:CGRectMake(0, 64, WIDTH, HEIGHT - 64)];
  self.contentView.backgroundColor = [UIColor purpleColor];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
